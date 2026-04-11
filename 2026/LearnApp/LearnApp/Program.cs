using System.Runtime.InteropServices;

string data;

data = "5";
string str;
str = "1";

int a = Convert.ToInt32(str);
int b = Convert.ToInt32(data);

//Console.WriteLine(b + a);

string str1;
 int num1, num2;

Console.WriteLine("Enter first number:");
 str1 = Console.ReadLine();
num1= Convert.ToInt32(str1);

Console.WriteLine("Enter second number:");
str1 = Console.ReadLine();
num2 = Convert.ToInt32(str1);


int sum = num1 + num2;
Console.WriteLine("The sum of " + num1 + " and " + num2 + " is: " + sum);

