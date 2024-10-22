namespace EntitySystem;

public abstract class Entity {
    public int X { get; protected set; } = 0;
    public int Y { get; protected set; } = 0;

    public int Size { get; protected set; }

    public Entity(int size) {
        Size = size;
    }

    public void MoveLeft() {
        X -= Size;
    }

    public void MoveRight() {
        X += Size;
    }

    public void MoveUp() {
        Y += Size;
    }

    public void MoveDown() {
        Y -= Size;
    }

    protected bool Collides(Entity other) {
        int myLeft = X - Size / 2, otherLeft = other.X - other.Size / 2;
        int myRight = X + Size / 2, otherRight = other.X + other.Size / 2;
        int myUp = Y + Size / 2, otherUp = other.Y + other.Size / 2;
        int myDown = Y - Size / 2, otherDown = other.Y - other.Size / 2;

        return myLeft <= otherRight && myRight >= otherLeft && myUp >= otherDown && myDown <= otherUp;
    }

    public int Health { get; protected set; } = 100;

    public void ReceiveDamage(int damage) {
        Health -= damage;
    }

    protected bool Hit(Entity entity) {
        if (!Collides(entity)) {
            return false;
        }

        entity.ReceiveDamage(5);

        return true;
    }
}
