Console.WriteLine("Hello, World again!");

int i = 1;
string path = "test.txt";
string[] lines = { "Jova", "Eva", "Pawol","blA" ,"adabra" };
File.WriteAllLines(path, lines);
using (StreamReader reader = new StreamReader(path))
{
    string? line;
    while ((line = reader.ReadLine()) != null)
    {
        Console.WriteLine($"{i++}. {line}");
    }
}