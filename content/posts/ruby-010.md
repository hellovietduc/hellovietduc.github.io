---
template: post
title: Ruby 010
socialImage: /media/posts/ruby-010/thumb.png
draft: false
date: 2021-06-17T04:30:00.000Z
description: Not 101. This doens't have everything you need to know about Ruby. Just something I learned.
series: Today I learned
tags:
  - ruby
---
## 1. `"` vs `'`

Use double quotes if you want to do:

- String interpolation.
- Using escape sequences.

## 2. Back-tick (`` ` ``)

A special use of back-ticks is with the `puts` method.

```ruby
puts `ls`
```

will send the string `ls` as a command to the operating system, which in this case I believe you certainly know what the command does (unless you're from Windows).

## 3. `String.eql?` vs `String.equal?`

`String.eql?` acts like the double equals operator (`==`), checks if two strings are identical.

`String.equal?` checks whether two strings are the same object.

```ruby
a = "hello"
b = "hello"
c = b

puts a.eql? b # prints "true"
puts a.equal? b # prints "false"
puts b.equal? c # prints "true"
```

## 4. `&&` vs `and`, `||` vs `or`, `!` vs `not`

They are not the same. They differ in precedence. The character operators (`&&`, `||`, and `!`) have higher precedence than the word operators (`and`, `or`, and `not`).

## 5. Code blocks

Duck: *"Hey, JavaScript developers! Take a look at this."*

```ruby
foo() {
  puts "Hi there!"
}
```

JS devs: *"What is this? Is this a function declaration?"*

Duck: _"Nah... Don't be **foo**led! It's a function (or more correctly, method) invocation. The braces are a code block that's passed to the method `foo`. Think of it as a callback function in JavaScript. The `foo` method can execute the code block whenever it wants by using the keyword `yield`."_

```ruby
def foo
  puts "I am a function, foo!"
  yield
end

foo() {
  puts "Hi there!"
}

# Output is:
# I am a function, foo!
# Hi there!
```

*Code blocks also have another syntax: `do ... end`.*

```ruby
foo() do
  puts "Hi there!"
end
```

## 6. Multiple return values

```ruby
def calc(n)
  return 1 * n, 2 * n, 3 * n
end

a, b, c = calc(5)
puts "#{a}, #{b}, #{c}" # prints "5, 10, 15"
```

Ruby can return multiple values from a method, much like Go. However, it's not a native feature.

You have to explicitly use the `return` keyword for it to work. Under the hood, Ruby actually wraps the return values in an array and return it. On the left side of the assignment, we use a syntax called *parallel assignment* that extracts the corresponding values from the returned array and assign them to each variable.

## 7. Checking if a value falls within a range

```ruby
def is_two_digit_number?(n)
  (10...99) === n
end

puts is_two_digit_number?(3) # prints "false"
puts is_two_digit_number?(33) # prints "true"
```

Ranges in Ruby can be created using the `..` and `...` operators.

- `..` creates an inclusive range. In math: `[low, high]`
- `...` creates an exclusive range. In math: `[low, high)`

The triple equals operator (`===`) is used to check whether a value is within a range.
