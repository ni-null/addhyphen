# addhyphen

Custom your own rule to insert hyphen

credit card,phone number,serial, etc.

## Installing

```
npm i addhyphen
```

## Example

```
const addhyphen = require("addhyphen")

const result = addhyphen.convert("123456", { format: "1-2-3" })
console.log(result) // 1-23-456

```

## Options

### max_limit ( default false)

```

addhyphen.convert("123456789", { format: "1-2-3" })
// 1-23-456-789

addhyphen.convert("123456789", { format: "1-2-3" ,max_limit: true })
// 1-23-456

```

### symbol ( default '-')

```

addhyphen.convert("123456", { format: "1-2-3" })
// 1-23-456

addhyphen.convert("123456", { format: "1-2-3" ,symbol:"🦎"})
// 1🦎23🦎456

```

### return(default or 'array')

```

addhyphen.convert("123456789", { format: "1-2-3" })
// 1-23-456-789 <--string

addhyphen.convert("123456789", { format: "1-2-3" ,return: "array"})
// [ '1-23-456', '789' ]

```

### mode (default or 'loop')

max_limit not working when { mode:'loop' }

```
addhyphen.convert("1234567890", { format: "1-2", mode: "loop" })
// 1-23-4-56-7-89-0

addhyphen.convert("1234567890", { format: "1-2", mode: "loop",return: "array" })
//[ '1-23-4-56-7-89', '0' ]

addhyphen.convert("1234567890", { format: "4", mode: "loop",return: "array" })
//[ '1234-5678', '90' ]



```
