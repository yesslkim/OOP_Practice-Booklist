# OOP_Practice-Booklist

## 코드모음 & 배운거 노트

### [localstorage](https://gist.github.com/yesslkim/6fe12bc59b9129fa32925a3226990901)

### static

- Definition
  - The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself. Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
  - "prototype"이 아닌 클래스 함수 자체에 메서드를 설정할 수도 있습니다. 이런 메서드를 정적(static) 메서드라고 부릅니다.
  - static class cannot be instantiated or inherited and that all of the members of the class are static in nature.
- syntax
  - static methodName() { ... }
  - static propertyName [= value];
