import { describe, expect, test } from 'bun:test'
import { validateAndRepairGPT5Profile } from '../../src/core/config/validator'

describe('OpenRouter GPT-5 config validation', () => {
  test('repairs missing GPT-5 baseURL to OpenRouter for OpenRouter profiles', () => {
    const repaired = validateAndRepairGPT5Profile({
      name: 'OpenRouter GPT-5',
      provider: 'openrouter',
      modelName: 'openai/gpt-5',
      apiKey: 'test-key',
      maxTokens: 8192,
      contextLength: 128000,
      isActive: true,
      createdAt: 1,
    })

    expect(repaired.baseURL).toBe('https://openrouter.ai/api/v1')
    expect(repaired.validationStatus).toBe('auto_repaired')
  })
})
