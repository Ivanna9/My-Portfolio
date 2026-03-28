using System.Text.Json;
User user = new User
{
    Name = "John Doe",
    City = "New York",
    Age = 30
};

string json = JsonSerializer.Serialize(user);
Console.WriteLine(json);

File.WriteAllText("user.json", json);
string fromFile = File.ReadAllText("user.json");

User? loaded = JsonSerializer.Deserialize<User>(fromFile);
Console.WriteLine($"Name: {loaded.Name}, City: {loaded.City}, Age: {loaded.Age}");
Console.WriteLine($"{loaded.Name} - {loaded.City} - {loaded.Age}");

class User
{
    public string? Name { get; set; }
    public string? City { get; set; }
    public int Age { get; set; }

}