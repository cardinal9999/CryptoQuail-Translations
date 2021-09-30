package encryption
import (
	"encoding/hex"
	"fmt"
	"math/big"
)
func crypt(input, key string) (output string) {
	L := len(key)
	u1 := hex.EncodeToString([]byte(key)) 
	u := new(big.Int)
	u.SetString(u1, 16)
	for i := range input {
		output += string(int(input[i]) ^ int(key[i%L]) ^ int(u.Int64() % 100)) // It works ...  Probably
	}
	return output
}
// Testing //
func main() {
a := crypt("CryptoQuail", "test")
fmt.Print(a)
fmt.Print(crypt(a, "test"))
}