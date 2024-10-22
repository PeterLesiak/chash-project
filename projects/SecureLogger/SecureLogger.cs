using System;

namespace SecureLogger;

public class SecureLogger {
    private string message = "";

    public string Message {
        get { return message; }
        set { message = HashMessage(value); }
    }

    public SecureLogger(string message) {
        Message = message;
    }

    public void Log() {
        Console.WriteLine(message);
    }

    private static string HashMessage(string input) {
        string output = "";

        for (int i = 0; i < input.Length; ++i) {
            int endIndex = input.IndexOf(']', i);

            if (input[i] == '[' && endIndex > 0) {
                while (++i < endIndex) output += "*";

                continue;
            }

            output += input[i];
        }

        return output;
    }
}
