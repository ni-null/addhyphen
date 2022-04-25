module.exports = {
  convert: convert,
}

//add_indexhyphen.convert("asdasd", { format: "2-1-3" })

function convert(string, set) {
  let insert_position = set.format.split("-").map(Number)
  insert_position.reduce((a, b, i) => (insert_position[i] = a + b), 0)

  const max_rule_length = insert_position.slice(-1).pop()

  //symbol
  const symbol = set.symbol ? set.symbol : "-"
  //symbol

  //mode
  if (set.mode == "loop") return process_loop(string, symbol, set.format.split("-").map(Number), set.return)
  //mode

  //return
  if (set.return == "array") {
    const string_array = [string.substring(0, max_rule_length), string.substring(max_rule_length, string.length)]
    return [process(string_array[0], symbol, insert_position), string_array[1]]
  }
  //return

  //max_limit
  const max_string_length = set.max_limit ? max_rule_length : string.length
  string = string.slice(0, max_string_length)
  return process(string, symbol, insert_position)
  //max_limit
}

function process(string, symbol, insert_position) {
  let string_inserted = ""

  string.split("").forEach((e, i) => {
    if (i == insert_position[0]) {
      string_inserted += `${symbol}${e}`
      insert_position.shift()
    } else string_inserted += e
  })

  return string_inserted
}

function process_loop(string, symbol, insert_rule, type) {
  if (type == "array") {
    const rule_sum_length = insert_rule.reduce((a, b) => a + b, 0)

    const string_surplus_length = string.length % rule_sum_length

    const string_surplus = string.substring(string.length - string_surplus_length)

    string = string.substring(0, string.length - string_surplus_length)

    return [loop_insert(string, symbol, insert_rule), string_surplus]
  } else {
    return loop_insert(string, symbol, insert_rule)
  }
}

function loop_insert(string, symbol, insert_rule) {
  let string_inserted = ""
  let add_index = insert_rule[0]

  string.split("").forEach((e, i) => {
    if (i == add_index) {
      string_inserted += `${symbol}${e}`

      if (insert_rule[1]) {
        add_index = add_index + insert_rule[1]
        insert_rule.push(insert_rule.shift())
      } else {
        add_index = add_index + insert_rule[0]
      }
    } else string_inserted += e
  })

  return string_inserted
}
