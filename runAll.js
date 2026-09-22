import { walk } from 'https://deno.land/std/fs/walk.ts';

const directories = ['./cursos/obc/modulo-1'];

for (const directory of directories) {
  console.log(`Searching for files in: ${directory}`);

  for await (const entry of walk(directory)) {
    if (entry.isFile && (entry.name.endsWith('.js') || entry.name.endsWith('.ts'))) {
      console.log(`Running: ${entry.path}`);
      await Deno.run({
        cmd: ['deno', 'run', '--allow-net', entry.path],
      }).status();
    }
  }
}
