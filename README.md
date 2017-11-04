# Crypto Split
A trivial implementation of secret sharing. Text message is split into *N* hex keys, that can be combined to retreive back the original message. All *N* keys must be collected to reconstruct the message. Even if one key is missing - no information about the original message can be attained.

No back-end communication is done, key generation and combination is done solely in your browser. ([Source code](https://github.com/ruskakimov/crypto-split) is open for anyone to confirm)

## Use cases
- send secret over multiple channels 
- split secret ownership between multiple people
- store secret in multiple places

> secret can be a password, credit card credentials, etc.

## References
- [Wikipedia](https://en.wikipedia.org/wiki/Secret_sharing#Trivial_secret_sharing)
- [Cipher machines and cryptology](http://users.telenet.be/d.rijmenants/en/secretsplitting.htm)