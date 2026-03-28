int i = 1;
string path = "test.txt";
using (StreamWriter writer = new StreamWriter(path, append: true))
{
    writer.WriteLine("start");
    writer.WriteLine("start");
    writer.WriteLine("start");
}
using (StreamWriter writerEnd = new StreamWriter(path, append: false))
{
    writerEnd.WriteLine("end");
    writerEnd.WriteLine("end");
}

string? line = "";
using (StreamReader all = new StreamReader(path))
{

    while ((line = all.ReadLine()) != null)
    {
        Console.WriteLine($"{i++}. {line}");
    }
}