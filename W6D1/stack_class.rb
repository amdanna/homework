class Stack
    def initialize
        @stack = []
    end

    def push(el)
        @stack << el
    end

    def pop
        @stack.pop

    end

    def peek
       return @stack.first

    end

    def print_stack
        @stack
    end

end