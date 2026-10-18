import { z } from "zod";

import { PropertyKeySchema } from "@/schemas/property-key";

export const UnknownRecordSchema = z.record(PropertyKeySchema, z.unknown());
