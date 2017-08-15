# currying-and-uncurrying
* 函数柯里化（currying），俄国数学家Moses Schonfinkel发明，currying又称部分求值。一个currying的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存了起来。待到函数被真正需要求值时，之前传入的所有参数都会被一次性用于求值。

* uncurrying的话题来自Brandan Eich 201年发表的一篇Twitter，uncurrying可将泛化this的过程提取出来，并得到更广的适用性。
