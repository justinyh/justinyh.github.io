import * as migration_20260802_184623 from './20260802_184623';
import * as migration_20260809_172350 from './20260809_172350';

export const migrations = [
  {
    up: migration_20260802_184623.up,
    down: migration_20260802_184623.down,
    name: '20260802_184623',
  },
  {
    up: migration_20260809_172350.up,
    down: migration_20260809_172350.down,
    name: '20260809_172350'
  },
];
