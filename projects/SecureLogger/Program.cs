namespace SecureLogger;

internal class Program {
    private static void Main() {
        SecureLogger secureLogger = new("Szymon [Tadeusz]");
        secureLogger.Log();

        secureLogger.Message += " Aleksy";
        secureLogger.Log();

        secureLogger.Message = "Hello, World!";
        secureLogger.Log();
    }
}
