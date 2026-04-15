using System.Globalization;


class Lesson07
{
    static void Main()
    {
        string str = "1,5";
        NumberFormatInfo numberFormatInfo = new NumberFormatInfo()
        {
            NumberDecimalSeparator = ".",
        };
        double a = double.Parse(str);
        Console.WriteLine(a);

        string str1 = "4dgfdge";
        try
        {
            int q1 = int.Parse(str1);
            Console.WriteLine("+");
        }
        catch (Exception)
        {
            Console.WriteLine("error");
        }

        string str2 = "2fgfdhg";
        int a2;
        bool result = int.TryParse(str2, out a2);
        if (result)
        {
            Console.WriteLine("+" + a2);
        }
        else
        {
            Console.WriteLine("error");
        }

        string str3 = "2";
        int a3;
        bool result3 = int.TryParse(str3, out a3);
        if (result3)
        {
            Console.WriteLine("+" + a3);
        }
        else
        {
            Console.WriteLine("error");
        }

    }
}

