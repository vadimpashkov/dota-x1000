import { BaseModifier, registerModifier } from '../lib/dota_ts_adapter';

class ModifierManaRegen extends BaseModifier {
	DeclareFunctions(): ModifierFunction[] {
		return [ModifierFunction.SPELL_AMPLIFY_PERCENTAGE];
	}

	GetModifierSpellAmplify_Percentage(): number {
		return 100.0;
	}

	// GetModifierChangeAbilityValue(): void {}
}

@registerModifier()
export class modifier_stats extends ModifierManaRegen {
	OnCreated(): void {
		if (IsServer()) {
			this.StartIntervalThink(0.3);
		}
	}

	OnIntervalThink(): void {}
}
