using System.Text.Json;
string path = "users.json";

List<User> users = new List<User>
{
    new User{Name="Falio ", City = "New York", Age=26},
    new User{Name="Jane ", City = "los Angeles", Age=45},
    new User{Name="John ", City = "Paris", Age=35},
};

string json = JsonSerializer.Serialize(users);
File.WriteAllText(path,json);

string fromFile = File.ReadAllText(path);
List<User>? loaded = JsonSerializer.Deserialize<List<User>>(fromFile);

foreach (User user in loaded)
{
    user.Age += 1;
}

string updatedJson = JsonSerializer.Serialize(loaded);
File.WriteAllText(path, updatedJson);

string final = File.ReadAllText(path);

List<User>? result = JsonSerializer.Deserialize<List<User>>(final);

foreach (User user in result)
{
    Console.WriteLine($"{user.Name} - {user.City} - {user.Age}");
}

class User
{
    public string? Name { get; set; }
    public string? City { get; set; }
    public int Age { get; set; }

}