namespace EntitySystem;

public class Enemy : Entity {
    public Enemy(int x = 0, int y = 0) : base(50) {
        X = x;
        Y = y;
    }

    public bool Hit(Player player) {
        return base.Hit(player);
    }

    public bool Hit(Enemy enemy) {
        return base.Hit(enemy);
    }
}
