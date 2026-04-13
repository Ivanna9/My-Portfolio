using System.Runtime.InteropServices;
using System.Globalization;

Console.Write("name ");
string? name = Console.ReadLine();

Console.Write("What is your age? ");
int age = Convert.ToInt32(Console.ReadLine());

Console.Write("What is your favorite color? ");
string? color = Console.ReadLine();

Console.Write("tall or short? ");
double height = Convert.ToDouble(Console.ReadLine());

Console.WriteLine($"Your name is {name}, you are {age} years old, your favorite color is {color}, and you are {height} tall.");
