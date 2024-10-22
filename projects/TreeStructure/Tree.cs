using System;
using System.Collections.Generic;

namespace TreeStructure;

public class Tree {
    public int Value { get; set; }

    private Tree? parent = null;

    public Tree? Parent {
        get { return parent; }
        set {
            if (value == null) {
                parent?.Remove(this);
            } else {
                value.Add(this);
            }

            parent = value;
        }
    }

    public Tree Root { get; private set; }

    public Tree(int value, Tree? parent = null) {
        Value = value;
        Parent = parent;
        Root = this;
    }

    public readonly List<Tree> Children = [];

    public bool Contains(Tree node) {
        foreach (var child in Children) {
            if (child == node) {
                return true;
            }

            if (child.Contains(node)) {
                return true;
            }
        }

        return false;
    }

    public void Add(Tree node) {
        Children.Add(node);

        node.parent = this;
        node.Root = Root;
    }

    public bool Remove(Tree node) {
        foreach (var child in Children) {
            if (child == node) {
                Children.Remove(node);

                node.parent = null;
                node.Root = this;

                return true;
            }

            if (child.Remove(node)) {
                return true;
            }
        }

        return false;
    }

    public void Traverse() {
        Console.WriteLine("\nnode {0}", Value);

        Traverse("");
    }

    private static readonly string[][] prefixes = [ [ "├── ", "│   " ], [ "└── ", "    " ] ];

    private void Traverse(string parentPrefix) {
        for (int i = 0; i < Children.Count; ++i) {
            var child = Children[i];
            string[] prefix = prefixes[i == Children.Count - 1 ? 1 : 0];

            Console.WriteLine("{0}{1}node {2}", parentPrefix, prefix[0], child.Value);
            child.Traverse(parentPrefix + prefix[1]);
        }
    }
}
