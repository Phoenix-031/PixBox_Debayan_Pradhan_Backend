import {z} from 'zod';

const objectSchema = z.object({
  type: z.enum(["image", "text"]),
  source: z.string().optional(),   
  scaleX: z.number().optional(),    
  scaleY: z.number().optional(),    
  top: z.number(),                  
  left: z.number(),                 
  opacity: z.number().optional(),   
  text: z.string().optional(),      
  fontSize: z.number().optional(),  
  fontFamily: z.string().optional(),
  fontWeight: z.string().optional(),
  fill: z.string().optional()  
})

const templateSchema = z.object({
  canvas: z.object({
    width: z.number(),
    height: z.number(),
    backgroundColor: z.string()
  }),
  objects: z.array(objectSchema)
});


export default templateSchema;

