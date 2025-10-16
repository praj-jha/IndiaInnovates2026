type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  metadata?: any;
}

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private logs: LogEntry[] = [];
  private maxLogs = 1000;

  private createLogEntry(level: LogLevel, message: string, metadata?: any): LogEntry {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      metadata
    };
  }

  private log(level: LogLevel, message: string, metadata?: any) {
    const logEntry = this.createLogEntry(level, message, metadata);
    
    // Store log entry for internal tracking
    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Only console output in development
    if (this.isDevelopment) {
      const logMethod = console[level] || console.log;
      if (metadata) {
        logMethod(`[${level.toUpperCase()}] ${message}`, metadata);
      } else {
        logMethod(`[${level.toUpperCase()}] ${message}`);
      }
    }

    // In production, only handle critical errors silently
    if (!this.isDevelopment && level === 'error') {
      this.sendToErrorService(logEntry);
    }
  }

  private sendToErrorService(logEntry: LogEntry) {
    // Implementation for error tracking service (Sentry, LogRocket, etc.)
    try {
      // Only send sanitized error data in production
      const sanitizedLog = {
        level: logEntry.level,
        message: logEntry.message,
        timestamp: logEntry.timestamp,
        // Filter out sensitive metadata
        metadata: this.sanitizeMetadata(logEntry.metadata)
      };
      
      // In production, this would send to your error tracking service
      // For now, we'll store it securely without console logging
      if (typeof window !== 'undefined' && 'indexedDB' in window) {
        // Store in IndexedDB for later retrieval if needed
        this.storeErrorLocally(sanitizedLog);
      }
    } catch (error) {
      // Silently fail in production to avoid exposing errors
    }
  }

  private sanitizeMetadata(metadata: any): any {
    if (!metadata) return undefined;
    
    // Remove sensitive fields
    const sensitiveFields = ['password', 'token', 'cookie', 'authorization', 'key'];
    const sanitized = { ...metadata };
    
    for (const field of sensitiveFields) {
      if (field in sanitized) {
        sanitized[field] = '[REDACTED]';
      }
    }
    
    return sanitized;
  }

  private storeErrorLocally(logEntry: LogEntry) {
    // Store errors locally for debugging without exposing them
    try {
      const request = indexedDB.open('CrackthruErrorLogs', 1);
      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        const transaction = db.transaction(['errors'], 'readwrite');
        const store = transaction.objectStore('errors');
        store.add({ ...logEntry, id: Date.now() });
      };
    } catch {
      // Silently fail
    }
  }

  debug(message: string, metadata?: any) {
    this.log('debug', message, metadata);
  }

  info(message: string, metadata?: any) {
    this.log('info', message, metadata);
  }

  warn(message: string, metadata?: any) {
    this.log('warn', message, metadata);
  }

  error(message: string, metadata?: any) {
    this.log('error', message, metadata);
  }

  // Get recent logs for debugging
  getRecentLogs(count = 50): LogEntry[] {
    return this.logs.slice(-count);
  }

  // Clear logs
  clearLogs() {
    this.logs = [];
  }

  // Performance logging
  time(label: string) {
    if (this.isDevelopment) {
      console.time(label);
    }
  }

  timeEnd(label: string) {
    if (this.isDevelopment) {
      console.timeEnd(label);
    }
  }
}

// Export singleton instance
export const logger = new Logger();
export default logger;