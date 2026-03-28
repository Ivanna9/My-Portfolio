Console.WriteLine("Hello, World again!");

string path = "test.txt";
string[] lines = { "Jova", "Eva", "Pawol" };
File.WriteAllLines(path, lines);
string[] fromFile = File.ReadAllLines(path);
foreach (string line in fromFile)
{
    Console.WriteLine(line);
}