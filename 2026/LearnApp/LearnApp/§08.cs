using System.Globalization;
using System;

namespace Lessons
{
    class Lesson08
    {
        static void Main()
        {
            int a = 10;
            int b = 9;
            double result = a % b;
            Console.WriteLine(result);

            int c = 6;
            int d = 12;
            int sum = c + d;
            double result2 = sum / 2;
            Console.WriteLine(result2);

            int[] numbers = { 1, 2, 3, 4, 5 };
            double sum1 = 0;
            foreach (int number in numbers)
            {
                sum1 += number;
            }
            double average = sum1 / numbers.Length;
            Console.WriteLine($"Average: {average}");
            Console.WriteLine("--------------------");
            Console.WriteLine("введіть 3 числа:");
            string q = Console.ReadLine();
            Console.WriteLine("перше число:" + q);
            string w = Console.ReadLine();
            Console.WriteLine("друге число:" + w);
            string e = Console.ReadLine();
            Console.WriteLine("третє число:" + e);
            Console.WriteLine("--------------------");
            int num1 = int.Parse(q);
            int num2 = int.Parse(w);
            int num3 = int.Parse(e);
            int sum4 = num1 + num2 + num3;
            int avr = num1 * num2 * num3;
            Console.WriteLine("--------------------");
            Console.WriteLine("сума:" + sum4);
            Console.WriteLine("умножение:" + avr);
            Console.WriteLine("--------------------");
            Console.WriteLine("--------------------");
            double euro = 50.5;
            double dollar = 48.9;

            Console.WriteLine("скільки у вас $:");
            double numDolClient = double.Parse(Console.ReadLine());
            double conDol = dollar * numDolClient;
            Console.WriteLine("Конвертована сума в долари: " + conDol);
            Console.WriteLine("\nскільки у вас euro:");
            double numEurClient = double.Parse(Console.ReadLine());
            double conEur = euro * numEurClient;
            Console.WriteLine("Конвертована сума в евро: " + conEur);
            Console.WriteLine("--------------------");
        }
    }
}

