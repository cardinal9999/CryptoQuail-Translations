require "securerandom"
def randint(min, max)
	SecureRandom.random_number(max - min) + min
end
def password(len)
	chars = ('a'..'z').to_a + ('0'..'9').to_a + ["!", "@", "#", "$", "%"]
	len.times.map { chars[randint(0, chars.length)] }.join
end
def shuffle(list)
	list.shuffle(random: Random.new(randint(1, 10000)))
end
def token_hex(len)
	s = SecureRandom.hex(len)
	randindex = (s.size.to_f / 2).ceil
	s[0, randindex]
end
if __FILE__ == $0
	puts randint(1, 10000)
	puts password(10)
	puts token_hex(12)
	puts shuffle(["DogeScript", "JavaScript", "Go", "Ruby"])
end
