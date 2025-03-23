import {generateAICharacters } from '../../src/config/aiCharacters';
import { groups } from '../../src/config/groups';
export async function onRequestGet({ env, request }) {
    console.log('init');
    try {
      return Response.json({
        code: 200,
        data: {
          groups: groups,
          characters: generateAICharacters('#groupName#', '#allTags#'),
        }
      });
    } catch (error) {
      console.error(error);
      return Response.json(
        { error: error.message },
        { status: 500 }
      );
    }
  }