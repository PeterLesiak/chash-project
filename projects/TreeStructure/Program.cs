using System;

namespace TreeStructure;

internal class Program {
    private static void Main() {
        Tree root = new(16);

        Tree child1 = new(20);
        root.Add(child1);

        Tree child2 = new(25);
        child2.Parent = root;

        Console.WriteLine("Root contains child1: {0}", root.Contains(child1));
        Console.WriteLine("Parent is root in child2: {0}", child2.Parent == child2.Root);

        root.Remove(child2);

        root.Traverse();

        Tree node1 = new(1);
        Tree node2 = new(2, node1);
        Tree node3 = new(3, node1);
        Tree node4 = new(4, node1);
        Tree node5 = new(5, node4);
        Tree node6 = new(6, node5);
        Tree node7 = new(7, node5);
        Tree node8 = new(8, node4);
        Tree node9 = new(9, node4);
        Tree node10 = new(10, node9);
        Tree node11 = new(11, node9);
        Tree node12 = new(12, node1);
        Tree node13 = new(13, node12);
        Tree node14 = new(14, node12);
        Tree node15 = new(15, node1);
        Tree node16 = new(16, node1);

        node1.Traverse();
    }
}
