import { execSync } from 'child_process';
import { join } from 'path';

describe('CLI tests', () => {
  it('should print a message', () => {
    const cliPath = join(process.cwd(), 'dist/apps/chapter6');

    const output = execSync(`node ${cliPath}`).toString();

    expect(output).toMatch(/Hello World/);
  });
});
