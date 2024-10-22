namespace EntitySystem;

public class Player : Entity {
    public Player(int x, int y) : base(100) {
        X = x;
        Y = y;
    }

    public bool Hit(Enemy enemy) {
        return base.Hit(enemy);
    }
}
