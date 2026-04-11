using System.Runtime.InteropServices;
using System.Globalization;

string str1 = "1.7";
NumberFormatInfo numberFormatInfo = new NumberFormatInfo()
{
    NumberDecimalSeparator = ".",
};

double t= Convert.ToDouble(str1, numberFormatInfo);


