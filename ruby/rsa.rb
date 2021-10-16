def generate_d(p, q, e)
	j = (p-1)*(q-1)
	a = 0
	while (e * a) % j != 1
		a += 1
	end
	a
end

def encrypt(m, n, e)
	(m ** e) % n
end
def decrypt(c, n, d)
	(c**d) % n
end

if __FILE__ == $0
	a = encrypt(123, 1259*1277, 347)
	puts "Encrypted:"
	puts a
	b = generate_d(1259, 1277, 347)
	puts "Value of D:"
	puts b
	c = decrypt(a, 1259*1277, b)
	puts "Decrypted:"
	puts c
end