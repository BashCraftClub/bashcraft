"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Terminal as TerminalIcon,
  ChevronRight,
  Folder,
  FileText,
  Image,
} from "lucide-react";
import Link from "next/link";

type FileSystemItem = {
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileSystemItem[];
};

type Command = {
  name: string;
  description: string;
  action: (args: string[]) => string | React.ReactNode;
};

type HistoryItem = {
  input: string;
  output: string | React.ReactNode;
};

const useTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [currentDirectory, setCurrentDirectory] = useState<string[]>([]);

  const fileSystem: FileSystemItem = {
    name: "root",
    type: "directory",
    children: [
      {
        name: "events",
        type: "directory",
        children: [
          {
            name: "hackathon",
            type: "directory",
            children: [
              {
                name: "info.txt",
                type: "file",
                content: "Annual Hackathon - June 15th",
              },
              {
                name: "poster.jpg",
                type: "file",
                content: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            name: "techtalk",
            type: "directory",
            children: [
              {
                name: "info.txt",
                type: "file",
                content: "Tech Talk: AI and Ethics - July 1st",
              },
              {
                name: "speaker.jpg",
                type: "file",
                content: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
          {
            name: "workshop",
            type: "directory",
            children: [
              {
                name: "info.txt",
                type: "file",
                content: "Workshop: Intro to Web Development - July 10th",
              },
              {
                name: "workshop.jpg",
                type: "file",
                content: "/placeholder.svg?height=200&width=300",
              },
            ],
          },
        ],
      },
      {
        name: "about.txt",
        type: "file",
        content:
          "We are a passionate group of tech enthusiasts dedicated to exploring and innovating in the world of technology.",
      },
      {
        name: "contact.txt",
        type: "file",
        content:
          "Email: techclub@university.edu\nPhone: (123) 456-7890\nLocation: Tech Building, Room 101",
      },
    ],
  };

  const getCurrentDir = (path: string[]): FileSystemItem => {
    let current = fileSystem;
    for (const dir of path) {
      current =
        current.children?.find(
          (item) => item.name === dir && item.type === "directory"
        ) || current;
    }
    return current;
  };

  const commands: Command[] = [
    {
      name: "cd",
      description: "Change directory",
      action: (args) => {
        if (args.length === 0 || args[0] === "/") {
          setCurrentDirectory([]);
          return "Changed to root directory";
        }
        if (args[0] === "..") {
          setCurrentDirectory((prev) => prev.slice(0, -1));
          return `Changed to ${currentDirectory.slice(0, -1).join("/") || "/"}`;
        }
        const newPath = [...currentDirectory, args[0]];
        const dir = getCurrentDir(newPath);
        if (dir.type === "directory") {
          setCurrentDirectory(newPath);
          return `Changed to /${newPath.join("/")}`;
        }
        return `${args[0]} is not a directory`;
      },
    },
    {
      name: "ls",
      description: "List directory contents",
      action: () => {
        const currentDir = getCurrentDir(currentDirectory);
        return (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {currentDir.children?.map((item) => (
              <div key={item.name} className="flex items-center">
                {item.type === "directory" ? (
                  <Folder className="mr-2 text-[#40C057]" size={16} />
                ) : item.name.endsWith(".jpg") || item.name.endsWith(".png") ? (
                  <Image className="mr-2 text-blue-500" size={16} />
                ) : (
                  <FileText className="mr-2 text-gray-500" size={16} />
                )}
                {item.name}
              </div>
            ))}
          </div>
        );
      },
    },
    {
      name: "cat",
      description: "Display file contents",
      action: (args) => {
        if (args.length === 0) return "Please specify a file";
        const currentDir = getCurrentDir(currentDirectory);
        const file = currentDir.children?.find(
          (item) => item.name === args[0] && item.type === "file"
        );
        if (!file) return `File not found: ${args[0]}`;
        if (file.name.endsWith(".jpg") || file.name.endsWith(".png")) {
          return (
            <img
              src={file.content}
              alt={file.name}
              className="max-w-full h-auto"
            />
          );
        }
        return file.content || "";
      },
    },
    {
      name: "clear",
      description: "Clear the terminal",
      action: () => {
        setHistory([]);
        return "";
      },
    },
    {
      name: "aboutUs",
      description: "Display information about the club",
      action: () => {
        return (
          commands.find((cmd) => cmd.name === "cat")?.action(["about.txt"]) ||
          ""
        );
      },
    },
    {
      name: "contact",
      description: "Display contact information",
      action: () => {
        return (
          commands.find((cmd) => cmd.name === "cat")?.action(["contact.txt"]) ||
          ""
        );
      },
    },
    {
      name: "join",
      description: "Information on how to join the club",
      action: () => (
        <div>
          To join our club, please fill out the application form:
          <Link
            href="https://forms.gle/exampleForm"
            target="_blank"
            className="text-[#40C057] hover:underline ml-2"
          >
            Application Form
          </Link>
        </div>
      ),
    },
    {
      name: "events",
      description: "List upcoming events",
      action: () => {
        setCurrentDirectory(["events"]);
        return commands.find((cmd) => cmd.name === "ls")?.action([]) || "";
      },
    },
    {
      name: "help",
      description: "Display available commands",
      action: () =>
        commands.map((cmd) => `${cmd.name}: ${cmd.description}`).join("\n"),
    },
    {
      name: "bashcraft",
      description: "Display welcome message",
      action: () => (
        <pre className="text-[#40C057] font-bold">
          {`
 __          __  _                            _          ____            _     ____            __ _   
 \\ \\        / / | |                          | |        |  _ \\          | |   / ___|          / _| |  
  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___  | |_ ___   | |_) | __ _ ___| |__| |     _ __ __ _| |_| |_ 
   \\ \\/  \\/ / _ \\ |/ __/ _ \\| '_ \` _ \\ / _ \\ | __/ _ \\  |  _ < / _\` / __| '_ \\| |    | '__/ _\` |  _| __|
    \\  /\\  /  __/ | (_| (_) | | | | | |  __/ | || (_) | | |_) | (_| \\__ \\ | | | |____| | | (_| | | | |_ 
     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|  \\__\\___/  |____/ \\__,_|___/_| |_|\\_____|_|  \\__,_|_|  \\__|
          `}
        </pre>
      ),
    },
  ];

  const executeCommand = (input: string) => {
    const [commandName, ...args] = input.trim().split(" ");
    const command = commands.find((cmd) => cmd.name === commandName);

    if (command) {
      return command.action(args);
    } else {
      return `Command not found: ${commandName}. Type 'help' for a list of commands.`;
    }
  };

  return { history, setHistory, currentDirectory, executeCommand, commands };
};

export default function Terminal() {
  const { history, setHistory, currentDirectory, executeCommand, commands } =
    useTerminal();
  const [input, setInput] = useState("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const output = executeCommand(input);
      setHistory([...history, { input, output }]);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const matchingCommands = commands
        .filter((cmd) => cmd.name.startsWith(input))
        .map((cmd) => cmd.name);

      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        const output = matchingCommands.join("  ");
        setHistory([...history, { input, output }]);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-background text-green-500 rounded-lg shadow-lg font-mono">
      <div className="flex  flex-col items-start mb-4 pb-2">
        <h2 className="text-xl font-bold">./bashterm</h2>
        <h3 className="text-xl font-semibold">
          type 'help' for all available commands{" "}
        </h3>
      </div>
      <div className="flex items-center mb-2">
        <span className="mr-2 text-[#40C057]">
          /{currentDirectory.join("/")}
          {">"}
        </span>
        <form onSubmit={handleSubmit} className="flex-grow">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent focus:outline-none"
            autoFocus
          />
        </form>
      </div>
      <div ref={terminalRef} className="h-96 overflow-y-auto">
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            <div className="flex items-center">
              <span className="mr-2 text-[#40C057]">
                /{currentDirectory.join("/")}
                {">"}
              </span>
              <span>{item.input}</span>
            </div>
            <div className="ml-6 whitespace-pre-wrap break-words">
              {typeof item.output === "string" ? item.output : item.output}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
