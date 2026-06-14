namespace Lessons
{
    class Lesson10
    {
        static void Main()
        {
            double Usd, Eur =20, Rub =12;   
            Console.WriteLine("Enter the sum in USD:");
            Usd = double.Parse(Console.ReadLine());
            Console.WriteLine(Usd +" USD in Rub = " + (Usd * Rub));
            Console.WriteLine(Usd +" USD in Eur = " + (Usd * Eur)); 
        }
    }
}

