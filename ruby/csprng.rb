require "securerandom"
def randint(min, max)
	SecureRandom.send(:choose, (min..max), 8)
end
def password(len)
	chars = ('a'..'z').to_a + ('0'..'9').to_a + ["!", "@", "#", "$", "%"]
	len.times.map { chars[SecureRandom.random_number(chars.length)] }.join
end

if __FILE__ == $0
	puts randint(1, 1111111)
	puts password(11)
end