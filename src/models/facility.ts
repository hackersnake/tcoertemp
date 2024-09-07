import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/db';

// Define the attributes of the Facility model
interface FacilityAttributes {
  facility_id: number;
  facility_name: string;
  location?: string;
  capacity?: number;
  description?: string;
  slots_timing: any; // Adjust type as needed, e.g., Record<string, unknown>
  start_date: Date;
  end_date: Date;
}

// Define the optional attributes for creating a new Facility
interface FacilityCreationAttributes extends Optional<FacilityAttributes, 'facility_id'> {}

// Define the Facility model class
class Facility extends Model<FacilityAttributes, FacilityCreationAttributes>
  implements FacilityAttributes {
  public facility_id!: number;
  public facility_name!: string;
  public location?: string;
  public capacity?: number;
  public description?: string;
  public slots_timing!: any; // Adjust type as needed
  public start_date!: Date;
  public end_date!: Date;
}

// Initialize the model
Facility.init({
  facility_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  facility_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING
  },
  capacity: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  },
  slots_timing: {
    type: DataTypes.JSON,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'Facilities',
  timestamps: false
});

export default Facility;
