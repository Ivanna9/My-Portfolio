Console.WriteLine("Hello, World again!");

int i = 1;
string path = "test.txt";
string[] lines = { "Jova", "Eva", "Pawol" };
File.WriteAllLines(path, lines);
string[] fromFile = File.ReadAllLines(path);
foreach (string line in fromFile)
{
    Console.WriteLine($"{i++}. {line}");
}