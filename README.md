# Crypto Split
A trivial implementation of secret sharing. Text message is split into *N* hex keys, that can be combined to retreive back the original message. All *N* keys must be collected to reconstruct the message. Even if one key is missing - no information about the original message can be attained.

## Use cases
- send secret over multiple channels 
- split secret ownership between multiple people
- store secret in multiple places

> secret can be a password, credit card credentials, etc.

## References
- [Wikipedia](https://en.wikipedia.org/wiki/One-time_pad)
