using System;

namespace EntitySystem;

internal class Program {
    private static void Main() {
        Player player = new(100, 80);
        Enemy  enemy1 = new(140, 100);
        Enemy  enemy2 = new(190, 140);

        Console.WriteLine("Player can hit enemy1: {0}", player.Hit(enemy1));
        Console.WriteLine("Player can hit enemy2: {0}", player.Hit(enemy2));
        Console.WriteLine("Enemy1 can hit enemy2: {0}", enemy1.Hit(enemy2));
    }
}
