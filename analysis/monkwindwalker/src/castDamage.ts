import SPELLS from 'common/SPELLS';
import Spell from 'common/SPELLS/Spell';

/**
 * Map of casted spells (that can appear when listening to casts) and their
 * associated damage (that can appear when listening to damage)
 *
 * CASTED ability on the left, DAMAGE spell on the right.
 *
 * This map only makes sense with 1-to-1 connections.
 */
const castDamageMap: ReadonlyMap<Spell, Spell[]> = new Map([
  [SPELLS.FISTS_OF_FURY_CAST, [SPELLS.FISTS_OF_FURY_DAMAGE]],
  [SPELLS.WHIRLING_DRAGON_PUNCH_TALENT, [SPELLS.WHIRLING_DRAGON_PUNCH_TALENT_TICK]],
  [SPELLS.SPINNING_CRANE_KICK, [SPELLS.SPINNING_CRANE_KICK_DAMAGE]],
  [SPELLS.CHI_BURST_TALENT, [SPELLS.CHI_BURST_TALENT_DAMAGE]],
  [SPELLS.CHI_WAVE_TALENT, [SPELLS.CHI_WAVE_TALENT_DAMAGE]],
  [SPELLS.RISING_SUN_KICK, [SPELLS.RISING_SUN_KICK_SECOND]],
  [
    SPELLS.FAELINE_STOMP_CAST,
    [SPELLS.FAELINE_STOMP_PULSE_DAMAGE, SPELLS.FAELINE_STOMP_DAMAGE_AND_HEAL],
  ],
]);

const entries = Array.from(castDamageMap);

/** Provide id of cast ability and get damage spell(s) back */
export const castToDamage: { [id: string]: Spell[] } = Object.fromEntries(
  entries.map(([cast, damage]) => [cast.id, damage]),
);
/** Provide id of damage ability and get cast ability back */
export const damageToCast: { [id: string]: Spell } = Object.fromEntries(
  entries.map(([cast, dSpells]) => dSpells.map((d) => [d, cast])).flat(),
);