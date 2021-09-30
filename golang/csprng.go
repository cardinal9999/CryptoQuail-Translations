package csprng

import (
	"crypto/rand"
	"fmt"
	"io"
	"math/big"
)

func init() {
	assertAvailablePRNG()
}

func assertAvailablePRNG() {
	buf := make([]byte, 1)
	_, err := io.ReadFull(rand.Reader, buf)
	if err != nil {
		panic(fmt.Sprintf("crypto/rand is unavailable: Read() failed with %#v", err))
	}
}
func token_bytes(n int) ([]byte) {
	b := make([]byte, n)
	_, err := rand.Read(b)
	if err != nil {
	panic(fmt.Sprintf("error"))
	}
	return b}
func password(n int) (string) {
	const letters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*-?"
	ret := make([]byte, n)
	for i := 0; i < n; i++ {
		num, err := rand.Int(rand.Reader, big.NewInt(int64(len(letters))))
		if err != nil {
			return ""
		}
		ret[i] = letters[num.Int64()]
	}

	return string(ret)}
func main() {
	fmt.Println(token_bytes(16))
	fmt.Println(password(16))
}