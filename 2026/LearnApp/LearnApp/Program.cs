using System.Text.Json;
List<User> users = new List<User>
{ new User{Name="Falio Doe", City = "New York", Age=26},
    new User{Name="Jane Smith", City = "los Angeles", Age=45},
    new User{Name="John Liff", City = "Paris", Age=35},
};

string json = JsonSerializer.Serialize(users);
Console.WriteLine(json);

File.WriteAllText("users.json", json);
string fromFile = File.ReadAllText("users.json");

List<User>? loaded = JsonSerializer.Deserialize<List<User>>(fromFile);
foreach(User user in loaded)
{
Console.WriteLine($"{user.Name} - {user.City} - {user.Age}");
}


class User
{
    public string? Name { get; set; }
    public string? City { get; set; }
    public int Age { get; set; }

}