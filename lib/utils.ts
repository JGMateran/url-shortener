import { customAlphabet } from 'nanoid'

import {
  VALID_ALPHABET,
  VALID_ALPHABET_LENGTH
} from './constants'

export function createAlias () {
  return customAlphabet(VALID_ALPHABET, VALID_ALPHABET_LENGTH)()
}
