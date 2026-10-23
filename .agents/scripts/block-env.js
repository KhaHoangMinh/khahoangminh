const fs = require('fs');

try {
  const input = fs.readFileSync(0, 'utf-8');
  if (!input.trim()) {
    process.stdout.write(JSON.stringify({ decision: 'allow' }));
    process.exit(0);
  }

  const data = JSON.parse(input);
  const toolCall = data.toolCall || {};
  const name = toolCall.name || '';
  const args = toolCall.args || {};

  const targetPath = (args.AbsolutePath || args.TargetFile || args.SearchPath || '').toLowerCase();
  const commandLine = (args.CommandLine || '').toLowerCase();

  const isEnvFile = targetPath.includes('.env');
  const touchesEnvCommand = /(^|\s|["'/])\.env($|\.|\s|["'/])/.test(commandLine) || commandLine.includes('.env');

  if (isEnvFile || (name === 'run_command' && touchesEnvCommand)) {
    process.stdout.write(JSON.stringify({
      decision: 'deny',
      reason: 'Security Gate: Access to .env files is blocked for all AI agents.'
    }));
    process.exit(0);
  }

  process.stdout.write(JSON.stringify({ decision: 'allow' }));
} catch (e) {
  process.stdout.write(JSON.stringify({ decision: 'allow' }));
}
