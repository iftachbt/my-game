import { it, expect, describe, beforeAll, beforeEach, afterEach, afterAll } from "vitest";
import { Character, closeConnection, connectDB } from "../../mongoDB/DB.js";
import { create } from "../../routes/character/character.service.js";
import { characterCreationValidation } from "../../routes/character/character.validation.js";
import { dbMockInit, randomString } from "../utils.js";

dbMockInit(beforeAll, beforeEach, afterEach, afterAll);

describe("create character tests", async () => {
  it("should create new character", async () => {
    const userId = randomString();
    const name = randomString();
    const race = randomString();

    await create({ race, name }, userId);

    const char = await Character.find({});

    expect(char[0]).toBeDefined();
    expect(char[0].id).toBeDefined();
    expect(char[0].name).toBe(name);
    expect(char[0].userId).toBe(userId);
    expect(char[0].race).toBe(race);
  });

  it("should fail on name  not exist", async () => {
    const res = null;
    const req = {
      body: {
        race: randomString(),
      },
    };

    characterCreationValidation(req, res, (err) => {
      expect(err.message).toBe("name is require");
    });
  });

  it("should fail on race not exist", async () => {
    const res = null;
    const req = {
      body: {
        name: randomString(),
      },
    };

    characterCreationValidation(req, res, (err) => {
      expect(err.message).toBe("race is require");
    });
  });
});
