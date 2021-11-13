class RailFence
  def self.decode(ciphertext, rails)
    zigzag(rails, ciphertext.length).
      sort.
      zip(ciphertext.chars).
      sort_by { |a| a[0][1] }.
      map { |a| a[1] }.
      join
  end
  def self.encode(plaintext, rails)
    zigzag(rails, plaintext.length).
      zip(plaintext.chars).
      sort.
      map { |a| a[1] }.
      join
  end
  def self.zigzag(rails, size)
    pattern = (0..rails - 1).to_a + (1..rails - 2).to_a.reverse
    pattern.cycle.first(size).zip(0..size)
  end
end

def encrypt(string, key)
  result = ""
	whatever = key.bytes.pack("c*").unpack("H*").first.to_i(16)
	int_ = whatever % key.length
	string = RailFence.encode(string, int_)

    codepoints = string.each_codepoint.to_a
    codepoints.each_index do |i|
        result += (codepoints[i] ^ key[i % key.size].ord ^ (whatever % 48)).chr
    end
  result
end

def decrypt(string, key)
  result = ""
	whatever = key.bytes.pack("c*").unpack("H*").first.to_i(16)
  codepoints = string.each_codepoint.to_a
  codepoints.each_index do |i|
        result += (codepoints[i] ^ key[i % key.size].ord ^ (whatever % 48)).chr
    end
  skratch = whatever % key.length
  result1 = RailFence.decode(result, skratch)
  
  result1
end
## Testing
## Test available at https://onecompiler.com/ruby/3xh9dkhy8
if __FILE__ == $0
    a = encrypt("CryptoQuail", "key-1")
    b = encrypt("cryptoquail", "key-1")
    puts a
    puts b
    puts decrypt(a, "key-2")
    puts decrypt(a, "key-1")
end
