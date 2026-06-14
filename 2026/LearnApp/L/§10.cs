using System.Globalization;
using System;

namespace Lessons
{
    class Lesson10
    {
        static void Main()
        {
            double firstValue, secondValue, thirdValue;
            Console.WriteLine("Enter the first value:");
            firstValue = double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the second value:");
            secondValue = double.Parse(Console.ReadLine());
            Console.WriteLine("Enter the third value:");
            thirdValue = double.Parse(Console.ReadLine());

            double sum = firstValue + secondValue + thirdValue;
            Console.WriteLine("The sum is: " + sum);
            double result = firstValue * secondValue * thirdValue;
            Console.WriteLine(("the product is: " + result));

        }
    }
}

