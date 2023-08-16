defmodule Fibonacci do
  def fibonacci_hof(iterator) do
    fn (repeat) ->
      iterate_fibonacci(repeat, iterator)
    end
  end

  defp iterate_fibonacci(0, _), do: :ok
  defp iterate_fibonacci(n, iterator) do
    term = fibonacci(n)
    iterator.(term)
    iterate_fibonacci(n - 1, iterator)
  end

  def fibonacci(0), do: 0
  def fibonacci(1), do: 1
  def fibonacci(n), do: fibonacci(n - 1) + fibonacci(n - 2)
end

defmodule Main do
  def print_next_term(s) do  
    IO.puts("Fibonacci HOF: #{s}")
  end
end

fibonacci_with_print = Fibonacci.fibonacci_hof(&Main.print_next_term/1)

fibonacci_with_print.(10)



