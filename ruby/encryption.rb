def crypt(string, key)
    result = ""
	whatever = key.bytes.pack("c*").unpack("H*").first.to_i(16)
    codepoints = string.each_codepoint.to_a
    codepoints.each_index do |i|
        result += (codepoints[i] ^ key[i % key.size].ord ^ (whatever % 22)).chr
    end
    result
end
## Testing
if __FILE__ == $0
    a = crypt("emperor penguin chicks", "key-1")
    puts a
    puts crypt(a, "key-0")
    puts crypt(a, "key-1")
end