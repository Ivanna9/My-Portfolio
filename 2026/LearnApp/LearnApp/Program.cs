Console.WriteLine("Hello, World again!");

string path = "test.txt";

File.WriteAllText(path, "This is a test file.");
string content = File.ReadAllText(path);
Console.WriteLine(content);